const styles = theme => ({
  listItem: {
    cursor: 'pointer',
    backgroundColor: "#C7D2FE",
    borderRadius: "0.8rem",
    marginTop: "5px",
    marginBottom: "5px",
    
    
  },
  textSection: {
    maxWidth: '85%'
  },  
  deleteIcon: {
    position: 'absolute',
    right: '5px',
    top: 'calc(50% - 15px)',
    '&:hover': {
      color: 'red'
    }
  }
});

export default styles;
