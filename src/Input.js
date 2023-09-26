function Input({name, onChange}) {
    return (
        <input type="text" value={name} onChange={onChange} placeholder="값을 입력하세요!"/>        
    );
  }
  
  export default Input;
  