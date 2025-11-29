import streamlit as st
import requests

st.title("AI News Generator")
st.subheader("Enter your topic and click on generate news")

chat_input = st.text_input("Enter your topic", placeholder="Climate Change, Technology Advances")
if chat_input:
    print(chat_input)

if st.button('Generate News'):
    st.write('Generating news...')
    # Here you would typically call your backend service to generate news
    response = requests.post('http://localhost:8000/news/generate_news', json={"topic": chat_input})

