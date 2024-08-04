import React, { useState, useEffect, useRef } from 'react';
import styles from './AvatarSelect.module.scss';
import { CAvatar } from '@coreui/react';

const AvatarSelect = ({ options, name, onChange, initialValue }) => {
  const [selectedValue, setSelectedValue] = useState(options.find(option => option.label === initialValue) || options[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (option) => {
    setSelectedValue(option);
    onChange(option.label);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter(option => option.value !== selectedValue.value);

  return (
    <div className={styles.avatarSelect} ref={dropdownRef}>
      <div 
        className={styles.selectedOption} 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <>
          <CAvatar src={selectedValue.value} className={styles.selectedImage} />
          {selectedValue.label}
        </>
      </div>
      {dropdownOpen && (
        <div className={styles.options} role="listbox">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleChange(option)}
              role="option"
              aria-selected={selectedValue && selectedValue.value === option.value}
            >
              <CAvatar src={option.value} className={styles.selectedImage}/>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { AvatarSelect };
