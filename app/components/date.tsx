import * as React from "react"
import { parseISO, format } from "date-fns"

interface Props {
  dateString: string
}

const Date: React.FC<Props> = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(parseISO(dateString), "LLLL d, yyyy")}
  </time>
)

export default Date
