// Valores: Truthy y Falsy
// Cuando tengamos que validar que un valor sea verdadero o sea falso

// si no tenemos un valor en valores booleanos es falsov

// Valores falsos
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");

// Valores que por defecto arrojan verdadero
Boolean(a);
// Un caracter alguna letra o algo en string es por defecto verdadero
Boolean(1);
// 1 o cualquier numero en adelante es verdadero
Boolean([]);
// un array por defecto es verdadero
Boolean({});
// un objeto por defecto es verdadero
Boolean(function () {});
// cualquier funcion por defecto es verdadera
Boolean(true);
