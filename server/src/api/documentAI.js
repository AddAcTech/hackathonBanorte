/**
 * TODO(developer): Uncomment these variables before running the sample.
*/

const projectId = '220088580382';
const location = 'us'; // Format is 'us' or 'eu'
const processorId = '3ba072cd17f04d76'; // Create processor in Cloud Console

import {DocumentProcessorServiceClient} from "@google-cloud/documentai"
import {promises as fs} from 'fs'

const client = new DocumentProcessorServiceClient();

async function DocumentAI(path) {
  const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

  const imageFile = await fs.readFile(path);
  const encodedImage = Buffer.from(imageFile).toString('base64');

  const request = {
    name,
    rawDocument: {
      content: file.body,
      mimeType: 'application/pdf',
    },
  };

  // Recognizes text entities in the PDF document
  const [result] = await client.processDocument(request);
  const {document} = result;

  // Get all of the document text as one big string
  const {text} = document;

  // Extract shards from the text field
  const getText = textAnchor => {
    if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
      return '';
    }

    // First shard in document doesn't have startIndex property
    const startIndex = textAnchor.textSegments[0].startIndex || 0;
    const endIndex = textAnchor.textSegments[0].endIndex;

    return text.substring(startIndex, endIndex);
  };

  // Read the text recognition output from the processor
  const [page1] = document.pages;
  const {paragraphs} = page1;
  let documentText = ""

  for (const paragraph of paragraphs) {
    const paragraphText = getText(paragraph.layout.textAnchor);
    documentText += paragraphText
  }

  return documentText
}

export default DocumentAI