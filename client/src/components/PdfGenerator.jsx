import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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

  // Contenido del PDF (Respuesta del endpoint)
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
      <div>
        {/* Botón para descargar el PDF */}
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="document.pdf"
          className="mt-4 py-2 px-4 rounded main-button"
        >
          {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
        </PDFDownloadLink>
      </div>
    );
  };

export default PdfGenerator;