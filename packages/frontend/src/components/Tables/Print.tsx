import React from 'react';
import { SlPrinter } from 'react-icons/sl';

const PrintPage: React.FC = () => {
  function handlePrint() {
    window.print();
  }

  return (
    <div>
      <PrinterIcon onClick={handlePrint} />
    </div>
  );
};

interface PrinterIconProps {
  size?: string | number;
  color?: string;
  onClick: () => void; // Adding onClick event handler prop
}

const PrinterIcon: React.FC<PrinterIconProps> = ({
  size = 24,
  color = 'grey',
  onClick,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <SlPrinter
      size={size}
      color={isHovered ? 'blue' : color}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default PrintPage;
