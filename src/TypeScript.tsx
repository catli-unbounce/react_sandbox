import React, { useState } from "react";
//TypeScipt must be transpiled
//ex. Specify the data type of the parameter
function getLowerCase(myString: string) {
  return myString.toLowerCase();
}

getLowerCase("Hello Catherine");

//Specifying the object's property data type
interface ApiResponse {
  data: {
    success: boolean;
    message: string;
  };
}
const apiResponse: ApiResponse = {
  data: {
    success: true,
    message: "Logged in",
  },
};

//Function must receive object ApiResponse and return a string
function getMessage(response: ApiResponse): string {
  if (response.data.success) return response.data.message;
  return "error";
}

export const TSComponent: any = () => {
  //Practical example 2
  const [state, setstate] = useState<{ fullName: string | null }>({
    fullName: "",
  });
  return <div>Hello World from TS</div>;
};
//Takes in an array of nubmers of type T
//Angle brackets specifies generic type
function last<T>(arr: T[]) {
  return 6;
}

function makeArr<T>(x: T) {
  return [25];
}

makeArr("Hello");

//Ensure that parameter has firstname and lastname property
const makeFullName = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullname: obj.firstName + " " + obj.lastName,
  };
};

//Ensure that parameter has firstname and lastname property
const makeFullNameGeneric = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullname: obj.firstName + " " + obj.lastName,
  };
};

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

//Practical examples

//1. Specifying the props that must be passed to a component
interface Props {
  name: string;
}
