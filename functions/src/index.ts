/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as logger from 'firebase-functions/logger';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { onCall, HttpsError } from 'firebase-functions/v2/https';

initializeApp();

const db = getFirestore();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// firebase deploy --only functions

const questionCollection = 'generate';
const promptField = 'prompt';

export const askGemini = onCall(async (request) => {
  const question = request.data.question;
  if (!question) {
    return new HttpsError(
      'invalid-argument',
      'The function must be called with ' +
        'one argument "question" containing the question to add.'
    );
  }
  logger.log(`Asking Gemini a question: ${question}`);
  // write to
  const result = await db
    .collection(questionCollection)
    .add({
      [promptField]: question,
    })
    .then((docRef) => {
      return {
        code: 200,
        message: 'Question asked successfully',
        documentId: docRef.id,
      };
    })
    .catch((error) => {
      logger.error('Error adding document: ', error);
      return new HttpsError('internal', JSON.stringify(error));
    });

  return result;
});
