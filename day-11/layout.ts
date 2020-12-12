import { getLinesFromFile } from '../utils'
import { Spot } from './modules/types'

const lines = getLinesFromFile(`${__dirname}/input.txt`)
const layout = lines.map(row => row.split('') as Spot[])

export default layout
