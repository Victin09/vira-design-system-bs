export default function hideAttr(val) {
  if (val === 'y' || val === 'yes') {
    return { display: 'none !important' };
  }

  return null;
}
