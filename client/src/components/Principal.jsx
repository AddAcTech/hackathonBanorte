import React from "react";
import ProgressBar from "./ProgresBar";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import marked from "marked";

function Principal() {
  // - Debe extraer el progreso realtivo a la meta de ahorro del usuario
  const progress = 50;

  // Definir estilos para el PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#ffffff",
      padding: 20
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
    },
    content: {
      fontSize: 14,
      textAlign: 'justify',
    }
  });

  const MyString = "#Titulo del PDF\n\n*Este* **es** un ejemplo de cómo generar un PDF usando React-pdf. Aquí, en lugar de usar HTML y CSS como lo haríamos con html2pdf.js, estamos creando nuestro PDF directamente con componentes de React-pdf.\n\n##Subtitulo\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc\n\n- Elemento 1\n- Elemento 2\n- Elemento 3\n\n1. Elemento 1\n2. Elemento 2\n3. Elemento 3\n\n**Negrita** *Cursiva* ***Negrita y cursiva***\n\n> Cita\n\n```javascript\nconst variable = 'valor';\n```\n\n[Enlace](https://www.google.com)";

  // Documento PDF
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Título del PDF</Text>
          <Text style={styles.content}>
            {MyString}
          </Text>
        </View>
      </Page>
    </Document>
  );

  const PdfGenerator = () => {
    return (
      <div className="p-8">
        <div className="cardBorder max-w-sm mx-auto">
          <h1 className="text-xl font-bold text-center mb-4">Ejemplo de PDF</h1>
          <p className="text-gray-700">
            Este contenido está estilizado usando Tailwind CSS en la UI de la aplicación.
          </p>
        </div>

        {/* Botón para descargar el PDF */}
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="document.pdf"
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
        </PDFDownloadLink>
      </div>
    );
  };

  return (
    <div className="mx-auto">
      <main className="my-4">
        <h1 className="title mx-8">Bienvenido User</h1>
        {/* Primer sección */}
        <section className="mb- p-4 mx-4">
          <p className="text-base md:text-lg lg:text-xl">
            Saldo en cuenta: -Extraer informacion de la cuenta del usuario-
          </p>
          <div className="flex items-center text-base md:text-lg lg:text-xl">
            <span>Meta ahorro:</span>
            <div className="ml-4 w-full md:w-1/4">
              <ProgressBar progress={progress} />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center sm:flex-row sm:items-stretch h-full">
          <div className="w-11/12 sm:w-1/2 mb-8 p-4 mx-4 flex flex-col cardBorder flex-grow">
            {/* Contenido de la primera sub-sección */}
            <p className="text-center subtitle">Analisis Financiero</p>
            <p className="text-base md:text-lg lg:text-xl">Resumen...</p>
            <p className="text-base md:text-lg lg:text-xl">
              Recomendaciones...
            </p>
            <p className="text-base md:text-lg lg:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dicta quia similique culpa temporibus, quos optio molestiae debitis impedit tempora mollitia soluta animi nisi ea perferendis harum quo sed earum.</p>
            <div className="flex justify-center mt-auto">
              <button className="main-button">Realizar analisis</button>
            </div>
          </div>

          <div className="w-11/12 sm:w-1/2 mb-8 p-4 mx-4 flex flex-col cardBorder flex-grow">
            {/* Contenido adicional */}
            {/* Contenido de la segunda sub-sección */}
            <p className="text-center subtitle">Aprendizaje</p>
            <div className="flex items-center my-4 mx-20 mb-8 border border-banorte-gray p-4">
              {/* Contenido de la clase actual */}
              <p>Clase</p>
            </div>
            <div className="flex items-center text-base md:text-lg lg:text-xl">
              <span>Progreso curso:</span>
              <div className="ml-4 w-full md:w-1/4">
                <ProgressBar progress={progress} />
              </div>
            </div>
            <div className="flex justify-center mt-auto">
              <button className="main-button">
                Continuar
              </button>
            </div>
          </div>
        </section>

        <section className="sm:flex-row sm:items-stretch cardBorder mb-8 p-4 mx-4">
          <p>Pendiente generar notificaciones</p>
          <div className="cardShadow">
            <p className="text-center subtitle">Prueba generacion de pdf</p>
            <PdfGenerator />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Principal;
