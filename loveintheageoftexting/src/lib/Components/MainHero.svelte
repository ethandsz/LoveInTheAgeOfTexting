<script lang="ts">
  import { db } from "$lib/firebase";
  import { collection, getDocs, doc, getDoc } from "firebase/firestore";

  let fieldValue: string | null = null;
  let loveAnswer: string | null = null;
  let textAnswer: string | null = null;
  let loading = false;

  async function fetchRandomDocument() {
    loading = true;
    fieldValue = null;
    loveAnswer = null;
    textAnswer = null;

    try {
      // Step 1: Get all documents from the 'questions' collection
      const querySnapshot = await getDocs(collection(db, 'questions'));
      const docs = querySnapshot.docs;

      if (docs.length === 0) {
        console.log('No documents found!');
        fieldValue = 'No documents available.';
      } else {
        // Step 2: Pick a random document
        const randomDoc = docs[Math.floor(Math.random() * docs.length)];
        const randomDocSnap = await getDoc(randomDoc.ref);

        if (randomDocSnap.exists()) {
          const data = randomDocSnap.data();
          textAnswer = data.text; 
          loveAnswer = data.love; // Replace with your actual field name
        } else {
          console.log('Selected document does not exist!');
          fieldValue = 'Document not found.';
        }
      }
    } catch (error) {
      console.error('Error fetching random document:', error);
      fieldValue = 'Error fetching document.';
    }

    loading = false;
  }
</script>

<main>
  <button on:click={fetchRandomDocument} disabled={loading}>
      Get Random Document
  </button>

  {#if loveAnswer && textAnswer}
    <p>Write a text message that you wanted to send but never did: {textAnswer}</p>
    <p>Say "I love you" without saying "I love you": {loveAnswer}</p>
  {/if}
</main>
