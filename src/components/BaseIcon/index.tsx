import { ReactNode } from "react";
import { GenericIcon } from "./styles";


// interface GenericIconProps{
//   backgroundColor: string;
// }

interface IconBaseProps{
  children: ReactNode;
  bgColor: string;
}

export  function BaseIcon( { children, bgColor } : IconBaseProps){

  return(
    <GenericIcon color={bgColor}>
      {children}
    </GenericIcon>
   
  )
}