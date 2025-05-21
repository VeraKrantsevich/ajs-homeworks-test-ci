export default function getHealthStatus({ health }) {
  if (health > 50) {
    return 'healthy';
  } else if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}