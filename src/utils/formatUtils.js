export const formatPhone = (phone) => {
    phone = phone.replace(/\D/g, '');
  
    if (phone.length === 10) {
        return phone.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1 $2-$3');
      }
  
    if (phone.length === 8) {
      return phone.replace(/^(\d{4})(\d{4})$/, '$1-$2');
    }
  
    return phone;
  };
  
  export const formatCuitCuil = (cuitCuil) => {
    const match = cuitCuil.match(/^(\d{2})(\d{8})(\d{1})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return cuitCuil;
  };
  