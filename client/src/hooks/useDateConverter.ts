import { useState, useEffect } from "react";
import dayjs from "dayjs";

function useDateConverter(dateInput: string | number | Date, format: string = "MMMM D, YYYY") {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const convertDate = () => {
      const parsedDate = dayjs(dateInput);

      if (!parsedDate.isValid()) {
        setFormattedDate("Invalid Date");
        return;
      }

      setFormattedDate(parsedDate.format(format));
    };

    convertDate();
  }, [dateInput, format]);

  return formattedDate;
}

export default useDateConverter;
