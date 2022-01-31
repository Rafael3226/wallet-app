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
      <div className="row">
        <p>{label}</p>
        {showPass && (
          <div style={{ marginLeft: '350px' }}>
            <div>{showPass}</div>
          </div>
        )}
        <input
          type={type}
          style={{
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
