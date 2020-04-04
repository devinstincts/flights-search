const minutesInHrsAndMins = (minutesWhole) => {
  const hours = (minutesWhole / 60);
  const hoursWhole = Math.floor(hours);
  const minutes = (hours - hoursWhole) * 60;
  const rminutes = Math.round(minutes);
  return `${hoursWhole}h ${rminutes}m`;
};

const stopsText = (stops) => {
  if (stops.length === 0) return 'Direct';
  if (stops.length === 1) return '1 Stop';
  return `${stops.length} Stops`;
};

export default {
  minutesInHrsAndMins,
  stopsText,
};
