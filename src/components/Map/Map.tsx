import React, {
  useEffect,
  useState,
  useMemo,
  FunctionComponent,
  useCallback,
} from 'react'
import Head from 'next/head'
import classnames from 'classnames'
import styles from './Map.module.scss'
import { Countries, Office, ListType } from '@customTypes/Offices'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerClusterer,
} from '@react-google-maps/api'

const center = {
  lat: 31.20176,
  lng: 29.91582,
}
type Libraries = (
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization'
)[]

type LatLngLiteral = google.maps.LatLngLiteral

interface MapProps {
  smallMap: boolean
  countries: Countries
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>
  map: google.maps.Map | null
  setListType: React.Dispatch<React.SetStateAction<ListType>>
  findCityAndCountryOfOffice: (id: number) => void
}

const Map: FunctionComponent<MapProps> = ({
  smallMap,
  setMap,
  map,
  countries,
  setListType,
  findCityAndCountryOfOffice,
}) => {
  const libraries = useMemo<Libraries>(() => ['places'], [])
  const [markers, setMarkers] = useState<Office[]>([])
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: 'b643e24330f0631f',
      zoomControl: true,
    }),
    []
  )

  const centerValue = useMemo<LatLngLiteral>(() => center, [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    libraries,
  })
  const mapContainerClasses = classnames(styles.map__container, {
    [styles['map__container-small']]: smallMap,
  })

  const onLoadHandler = (map: google.maps.Map): void => {
    setMap(map)
  }
  const unMountMapHandler = useCallback((): void => {
    setMap(null)
  }, [])

  const MarkersComponents = useCallback(() => {
    const markers: Office[] = []
    countries?.data.map((country) => {
      country.attributes.cities.data.map((city) => {
        city.attributes.offices.data.map((officeData) => {
          markers.push(officeData)
        })
      })
    })
    setMarkers(markers)
  }, [countries?.data])

  const panMapToOffice = (office: Office) => {
    map?.panTo({ lat: office.attributes.lat!, lng: office.attributes.lng! })
    map?.setZoom(18)
    findCityAndCountryOfOffice(office.id)
    setListType('details')
  }

  useEffect(() => {
    isLoaded && MarkersComponents()
    return () => {
      unMountMapHandler()
    }
  }, [MarkersComponents, unMountMapHandler, isLoaded])

  if (!isLoaded) return <div>Loading....</div>

  return (
    <GoogleMap
      mapContainerClassName={mapContainerClasses}
      center={centerValue}
      zoom={3}
      onLoad={onLoadHandler}
      onUnmount={unMountMapHandler}
      options={mapOptions}
    >
      <>
        {markers.length > 0 && (
          <MarkerClusterer clusterClass={styles.map__cluster}>
            {(clusterer) => (
              <>
                {markers.map((marker) => (
                  <Marker
                    key={marker.id}
                    position={{
                      lat: marker.attributes.lat!,
                      lng: marker.attributes.lng!,
                    }}
                    clusterer={clusterer}
                    onClick={() => panMapToOffice(marker)}
                  />
                ))}
              </>
            )}
          </MarkerClusterer>
        )}
      </>
    </GoogleMap>
  )
}

export default Map
