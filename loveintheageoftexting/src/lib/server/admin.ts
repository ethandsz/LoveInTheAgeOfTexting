import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID, FIREBASE_SERVICE_ACCOUNT } from '$env/static/private'
import pkg from 'firebase-admin';

try {
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: FB_PROJECT_ID,
            clientEmail: FB_CLIENT_EMAIL,
            privateKey: FB_PRIVATE_KEY,
        }),
    });
} catch (err) {
    if (!/already exists/u.test(err.message)) {
        console.error('Firebase Admin Error: ', err.stack)
    }
}


export const adminDB = getFirestore();
export const adminAuth = getAuth();
