import React from 'react';

function Input({
  label,
  value = '',
  onChange = () => {},
  placeholder = '',
  type = 'text',
  showPass,
}) {
  return (
    <div className="checkout__input">
      {label && <p>{label}</p>}
      <div className="row">
        {showPass && (
          <div style={{ marginLeft: '350px' }}>
            <div>{showPass}</div>
          </div>
        )}
        <input
          type={type}
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            borderRadius: '10px',
            background: '#f3f2ee',
            color: '#000',
          }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
