---
title: "Building a Simple RAG Application with Python"
date: "2024-11-10"
excerpt: "Learn how to build a Retrieval-Augmented Generation app that can answer questions from your PDF documents using semantic search and LLMs."
tags: ["AI/ML", "Python", "RAG", "LLM"]
image: "/blog/covers/getting-started-with-rag.jpg"
readTime: "8 min read"
---

# Building a Simple RAG Application with Python

Retrieval-Augmented Generation (RAG) is revolutionizing how we interact with documents. Instead of reading through hundreds of pages, you can simply ask questions and get precise answers backed by your content.

## What is RAG?

RAG combines the power of information retrieval with generative AI. It works by:

1. **Chunking** your documents into smaller pieces
2. **Embedding** these chunks into vector representations
3. **Retrieving** the most relevant chunks for your query
4. **Generating** answers using an LLM with the retrieved context

## Building the Application

Here's how I built my RAG app that's now live on Hugging Face:

```python
import streamlit as st
from qdrant_client import QdrantClient
from sentence_transformers import SentenceTransformer

def create_embeddings(text_chunks):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(text_chunks)
    return embeddings

def retrieve_relevant_chunks(query, vector_db, top_k=3):
    query_embedding = model.encode([query])
    results = vector_db.search(
        collection_name="documents",
        query_vector=query_embedding[0],
        limit=top_k
    )
    return results
```

## Key Challenges Solved

### 1. Document Chunking Strategy

Finding the right chunk size was crucial. Too small and you lose context, too large and retrieval becomes imprecise.

### 2. Vector Database Selection

I chose Qdrant for its simplicity and performance with small to medium datasets.

### 3. LLM Integration

Using a lightweight model ensures fast responses while maintaining quality.

## Results

The application achieves:

- **Sub-second** response times
- **High accuracy** for factual questions
- **Contextual awareness** across document sections

Try it out on [Hugging Face](https://huggingface.co/spaces/ajinkya45/SIMPLE-RAG-PDF) and let me know your thoughts!

## Next Steps

I'm working on adding:

- Multi-document support
- Better chunk overlap strategies
- Integration with larger models

What would you like to see next in RAG applications?
