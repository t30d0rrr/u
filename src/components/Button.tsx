import React from "react";

const Button: React.FC<{
  chislo: number,
  chislo2: number
}> = ({
  chislo,
  chislo2
}) => {
  var chislo3 = 3
  const [chislo4, setchislo4] = React.useState(4)

    return (
      <div className="Button">
        батон {chislo + chislo2} {chislo3} {chislo4}
      </div>
    );
  }

var perem: any = 1
const static_perem = 2

perem = static_perem

const fn = () => {
  return 3
}

perem = fn
perem = perem()








export default Button