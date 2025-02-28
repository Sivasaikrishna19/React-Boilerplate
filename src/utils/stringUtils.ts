
export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  

export const truncate = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };
  