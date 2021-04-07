import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item';
import { Input, Select } from 'antd'

function App() {
  const [array, setArray] = useState([])

  const { Search } = Input

  useEffect(() => {
    setValues([
      {
        continent: 'africa',
        name: 'african 1',
      },
      {
        continent: 'north america',
        name: 'north 1',
      },
      {
        continent: 'europe',
        name: 'europe 1',
      },
      {
        continent: 'antarctida',
        name: 'antarctida 1',
      },
      {
        continent: 'antarctida',
        name: 'antarctida 2',
      },
      {
        continent: 'antarctida',
        name: 'antarctida 3',
      },
    ])
    setArray([
      {
        continent: 'africa',
        name: 'african 1',
      },
      {
        continent: 'north america',
        name: 'north 1',
      },
      {
        continent: 'europe',
        name: 'europe 1',
      },
      {
        continent: 'antarctida',
        name: 'antarctida 1',
      },
      {
        continent: 'antarctida',
        name: 'antarctida 2',
      },
      {
        continent: 'antarctida',
        name: 'antarctida 3',
      }
    ])
  }, [])

  const [values, setValues] = useState(array)
  const [options, setOptions] = useState([
    { value: 'all' },
    { value: 'europe' },
    { value: 'africa' },
    { value: 'north america' },
    { value: 'antarctida' },
  ])

  const [selectedValue, setSelectedValue] = useState('')

  const changeValue = (value) => {
    setSearchValue('')
    if (value === 'all') {
      setValues(array)
    }
    else {
      const newValues = array.filter(item => item.continent === value)
      setValues(newValues)
    }
    setSelectedValue(value)
  }

  const [searchValue, setSearchValue] = useState('')
  const onSearch = (value) => {
    if (value.trim() !== '') {
      const filteredValues = array.filter(item => {
        return item.continent === selectedValue && item.name === value
      })
      setValues(filteredValues)
    }
    else {
      setValues(array)
    }
  }

  const onInputChange = (e) => {
    if (e.target.value === '') {
      selectedValue === '' ? setValues(array) : changeValue(selectedValue)
      setSearchValue('')
    } else {
      setSearchValue(e.target.value)
    }
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Countries List</h1>
        <Select
          defaultValue={"Choose continent"}
          style={{ marginBottom: '10px', minWidth: '160px' }}
          onChange={(value) => changeValue(value)}
        >
          {options.map(option => <Select.Option key={option.value} value={option.value}>{option.value}</Select.Option>)}
        </Select>
        <Search
          value={searchValue}
          placeholder="Find country..."
          onSearch={onSearch}
          onChange={onInputChange}
          style={{ width: 300, marginBottom: 10 }} />
        <div className='container'>
          {values.length !== 0 ? values.map(item => <Item key={item.name} {...item}></Item>) : <h2>No results for {searchValue}</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
