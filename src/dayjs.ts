/* eslint-disable func-names */
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import duration from "dayjs/plugin/duration"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)

