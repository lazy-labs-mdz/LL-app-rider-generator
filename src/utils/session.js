const saveSession = (data) => {

}
const getSession = () => {
  const session = localStorage.getItem('session');
  if (session) return JSON.parse(session);
  else return null;
}
const clearSession = () => {
  localStorage.removeItem('session');
}
