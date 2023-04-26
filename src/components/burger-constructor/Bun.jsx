const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
  color: 'var(--text-inactive-color)',
};

const Bun = ({ index, item }) => {
  const { id, name, type } = item;
  console.log(name);
  return (
    <div style={{ ...style }} data-testid="ingredient">
      {name}
    </div>
  );
};

export default Bun;
