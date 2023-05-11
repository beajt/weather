const Form = (props) => {

    return (
        <form onSubmit={props.handleFormSubmit}>
        <label htmlFor="city">Enter a city: </label>
        <input 
        type="text" 
        id="city" 
        onChange={props.handleInputChange}
        value={props.city} />
        <button onClick={props.handleFormSubmit}>Submit</button>
      </form>
    );
};

export default Form;