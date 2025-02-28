import nltk
import string
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from nltk.corpus import stopwords

nltk.download("stopwords")
stop_words = set(stopwords.words("english"))

def preprocess_text(text):
    """Remove punctuation, lowercase text, and remove stopwords"""
    text = text.lower().translate(str.maketrans("", "", string.punctuation))
    words = text.split()
    words = [word for word in words if word not in stop_words]
    return " ".join(words)

def find_similar_documents(new_text, all_documents):
    """Finds the most similar documents using TF-IDF & Cosine Similarity"""
    documents = [doc.content for doc in all_documents]
    documents.append(new_text)

    # Preprocess texts
    documents = [preprocess_text(doc) for doc in documents]

    # Convert to TF-IDF matrix
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)

    # Compute similarity
    similarity_matrix = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])

    # Sort by similarity score
    similar_docs = sorted(
        zip(all_documents, similarity_matrix[0]),
        key=lambda x: x[1],
        reverse=True
    )

    return [(doc.title, score) for doc, score in similar_docs if score > 0.2]  # Return matches above threshold
