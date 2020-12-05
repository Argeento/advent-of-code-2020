import { getLinesFromFile } from '../utils'

const seatsData = getLinesFromFile(`${__dirname}/input.txt`)
const seatIds = seatsData.map(getSeatId)

export default seatIds

interface Region {
  start: number
  end: number
}

function getSeatId(dirs: string): number {
  const rowDirs = dirs.slice(0, 7)
  const columnDirs = dirs.slice(-3)

  const rowNumber = getNumber(rowDirs, { start: 0, end: 127 })
  const columnNumber = getNumber(columnDirs, { start: 0, end: 8 })

  return rowNumber * 8 + columnNumber
}

function getNumber(dirs: string, region: Region): number {
  for (const dir of dirs) {
    region = getHalf(region, dir)
  }

  return region.start
}

function getHalf(region: Region, dir: string): Region {
  const middle = (region.start + region.end) / 2

  if (dir === 'F' || dir === 'L') {
    return {
      start: region.start,
      end: Math.floor(middle)
    }
  } else {
    return {
      start: Math.ceil(middle),
      end: region.end
    }
  }
}
