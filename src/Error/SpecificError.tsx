import React from "react";
import { useRouteError } from "react-router-dom";
import { NotFound } from "./NotFound";

export interface RouteError {
  status?: number;
  message?: string;
}


export const SpecificError = () => {
  const error = useRouteError() as RouteError; 

  if (error.status === 404) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>Ocurrió un error inesperado</h1>
      <p>
        {error.message ||
          "Error inesperado"}
      </p>
    </div>
  );
};
