import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import classnames from 'classnames'
import styles from './Map.module.scss'
import {
  Office,
  Countries,
  ListType,
  Country,
  City,
} from '@customTypes/Offices'
import { LeftArrow } from '../icons'
import OfficeDetails from './office-Details'

interface OfficesProps {
  isCollapsed: boolean
  officeDetails: Office
  setOfficeDetails: React.Dispatch<React.SetStateAction<Office>>
  title: string
  offices: Office[]
  setOffices: React.Dispatch<React.SetStateAction<Office[]>>
  listType: ListType
  setListType: React.Dispatch<React.SetStateAction<ListType>>
  handleListBack: () => void
  countries: Countries
  map: google.maps.Map | null
  countryData: Country
  setCountry: React.Dispatch<React.SetStateAction<Country>>
  cityData: City
  setCity: React.Dispatch<React.SetStateAction<City>>
  cities: City[]
  setCities: React.Dispatch<React.SetStateAction<City[]>>
}

const Offices: FunctionComponent<OfficesProps> = ({
  isCollapsed,
  officeDetails,
  setOfficeDetails,
  title,
  offices,
  setOffices,
  listType,
  setListType,
  handleListBack,
  countries,
  map,
  countryData,
  setCountry,
  cityData,
  setCity,
  cities,
  setCities,
}) => {
  // States

  // Classes
  const officesClasses = classnames(styles.offices, {
    [styles.offices__collapse]: isCollapsed,
  })
  const titleClasses = classnames(styles.offices__title, {
    [styles.offices__title_city]: listType !== 'countries',
  })

  const countriesListClasses = classnames(styles.offices__list, {
    [styles.offices__list_show]: listType === 'countries',
  })

  const citiesListClasses = classnames(styles.offices__list, {
    [styles.offices__list_show]: listType === 'cities',
  })
  const officesListClasses = classnames(styles.offices__list, {
    [styles.offices__list_show]: listType === 'offices',
  })

  // Helper Functions
  const extractCities = (country: Country) => {
    if (!country || !country.attributes.cities.data.length) return
    setCountry(country)
    setCities(country?.attributes.cities.data)
    setListType('cities')
    setOffices([])
  }

  const extractOffices = (city: City) => {
    if (!city || !city.attributes.offices.data.length) return
    setCity(city)

    if (city?.attributes.offices.data.length === 1) {
      setOffices([])
      setOfficeDetails(city.attributes.offices.data[0])
      setListType('details')
      return
    }
    setOffices(city.attributes.offices.data)
    setListType('offices')
  }

  const extractOfficeDetails = (office: Office) => {
    setOfficeDetails(office)
    setListType('details')
  }

  const redirectTheMap = useCallback(() => {
    if (listType === 'countries') {
      map?.panTo({ lat: 31.20176, lng: 29.91582 })
      map?.setZoom(3)
      return
    }
    if (listType === 'cities') {
      map?.panTo({
        lat: Number(countryData.attributes.lat),
        lng: Number(countryData.attributes.lng),
      })
      map?.setZoom(6)
    }
    if (listType === 'offices') {
      map?.panTo({
        lat: Number(cityData.attributes.lat),
        lng: Number(cityData.attributes.lng),
      })
      map?.setZoom(12)
    }
    if (listType === 'details') {
      map?.panTo({
        lat: Number(officeDetails.attributes.lat),
        lng: Number(officeDetails.attributes.lng),
      })
      map?.setZoom(16)
    }
  }, [listType])

  useEffect(() => {
    redirectTheMap()
  }, [redirectTheMap])

  return (
    <div className={officesClasses}>
      <h2 className={titleClasses} onClick={handleListBack}>
        <span>
          <LeftArrow />
        </span>
        <span>{title}</span>
      </h2>
      {/* Countries List */}
      <ul className={countriesListClasses}>
        {countries.data.map((item) => (
          <li
            key={item.id}
            className={styles.offices__item}
            onClick={() => extractCities(item)}
          >
            <span className={styles.offices__link}>{item.attributes.name}</span>
          </li>
        ))}
      </ul>
      {/* Cities List */}
      <ul className={citiesListClasses}>
        {cities.map((item) => (
          <li
            key={item.id}
            className={styles.offices__item}
            onClick={() => extractOffices(item)}
          >
            <span className={styles.offices__link}>{item.attributes.name}</span>
          </li>
        ))}
      </ul>
      {/* offices List */}
      <ul className={officesListClasses}>
        {offices.map((item) => (
          <li
            key={item.id}
            className={styles.offices__item}
            onClick={() => extractOfficeDetails(item)}
          >
            <span className={styles.offices__link}>{item.attributes.name}</span>
          </li>
        ))}
      </ul>
      {/* Office Details */}
      <OfficeDetails listType={listType} office={officeDetails} />
    </div>
  )
}

export default Offices
