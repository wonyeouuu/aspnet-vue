import { cloneDeep } from 'lodash/fp'

const data = [
  { id: 1, name: 'John', status: 'active' },
  { id: 2, name: 'Doe', status: 'active' },
  { id: 3, name: 'Jane', status: 'suspended' },
  { id: 4, name: 'Jack', status: 'active' },
  { id: 5, name: 'Jess', status: 'active' },
  { id: 6, name: 'Jump', status: 'active' },
  { id: 7, name: 'Jacket', status: 'active' },
  { id: 8, name: 'Michael', status: 'active' },
  { id: 9, name: 'Ken', status: 'active' },
  { id: 10, name: 'Q', status: 'active' },
]

const getTableData = () => new Promise ((resolve, reject) => {
  setTimeout(() => {
    const result = data.map(datum => Object.assign(datum, { age: Math.floor(Math.random() * 100) }))
    resolve(result.concat(
      cloneDeep(result).map(datum => Object.assign(datum, { id: datum.id + 10 }))
    ))
  }, 1000)
})

export default getTableData
