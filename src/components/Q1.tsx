/**
 * Write a component that is updated every second and show the current time.
 */
export function Q1 () {
  const time = new Date();
  return <p>The current time is: {time.toLocaleTimeString()}</p>
}