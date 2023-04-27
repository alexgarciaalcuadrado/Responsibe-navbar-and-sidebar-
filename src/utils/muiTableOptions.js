export const textLabels = {
    body: {
      noMatch: "Lo sentimos, no se encontraron registros",
      toolTip: "Ordenar",
      columnHeaderTooltip: (column) => `Orden para ${column.label}`,
    },
    pagination: {
      next: "Página siguiente",
      previous: "Página anterior",
      rowsPerPage: "Filas por página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar archivo Excel",
      print: "Imprimir",
      viewColumns: "Ver columnas",
      filterTable: "Filtrar tabla",
    },
    filter: {
      all: "Todo",
      title: "Filtros",
      reset: "Borrar",
    },
    viewColumns: {
      title: "Mostrar columnas",
      titleAria: "Mostrar/ocultar columnas de la tabla",
    },
    selectedRows: {
      text: "fila(s) seleccionadas",
      delete: "Eliminar",
      deleteAria: "Eliminar las filas seleccionadas",
    },
  };
  
  export const downloadOptions = {
    filterOptions: {
      useDisplayedColumnsOnly: true,
      useDisplayedRowsOnly: true,
    },
  };
  
  export const customOptions = {
    options: { elevation: 0 },
  };
  
  export const sortFunction = (data, colIndex, order, meta) => {
    return data.sort((a, b) => {
      if (typeof a?.data[colIndex] === "number") {
        if (order === "desc") {
          return a?.data[colIndex] - b?.data[colIndex];
        } else {
          return b?.data[colIndex] - a?.data[colIndex];
        }
      } else {
        if (a?.data[colIndex] && b?.data[colIndex]) {
          if (order === "desc") {
            return a?.data[colIndex]?.localeCompare(b?.data[colIndex]);
          } else {
            return b?.data[colIndex]?.localeCompare(a?.data[colIndex]);
          }
        } else {
          return 0;
        }
      }
    });
  };
  