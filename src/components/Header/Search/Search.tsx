import React, {
  FunctionComponent,
  FormEvent,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styles from './Search.module.scss'
import { Magnifier } from '@components/icons'
import SearchResult from '../Search-Result/Search-Result'
import { HeaderContext } from '@context/Header-Context'
import classNames from 'classnames'

const Search: FunctionComponent = () => {
  const { isOpen } = useContext(HeaderContext)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const searchRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const initiateSearchHandler = (e: FormEvent) => {
    e.preventDefault()
    console.log(searchTerm)
  }

  const resultsClasses = classNames(styles.search__results, {
    [styles.search__results_show]: isOpen,
  })

  useEffect(() => {
    const searchContainer = searchRef.current
    let timeout: ReturnType<typeof setTimeout>
    if (searchContainer) {
      timeout = setTimeout(() => {
        searchContainer.style.transform = `translateY(0)`
        searchContainer.style.opacity = '1'
        inputRef.current?.focus()
      }, 0)
    }
    return () => {
      searchContainer && (searchContainer.style.transform = `translateY(100%)`)
      clearTimeout(timeout)
    }
  }, [])
  return (
    <div className={styles.search}>
      <div className={styles.search__wrapper}>
        <form
          className={styles.search__input}
          onSubmit={initiateSearchHandler}
          ref={searchRef}
        >
          <input
            type='text'
            placeholder='Search for industries, products, services and more'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
          />
          <button>
            <Magnifier />
          </button>
        </form>
        <div className={styles.search__loading}>
          <RotatingLines width='20' strokeColor='#fff' strokeWidth='5' />
          <span>Loading Result</span>
        </div>
        <div className={resultsClasses}>
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <button className={styles.search__view}>View All Results</button>
        </div>
      </div>
    </div>
  )
}

export default Search
