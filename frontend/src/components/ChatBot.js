/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import './ChatBot.css'; // Import CSS file for custom styles
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/diagnose", { prompt });
  return res.data;
};

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => setIsListening(true);
      recognitionInstance.onend = () => setIsListening(false);
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setPrompt((prevPrompt) => prevPrompt + ' ' + transcript); // Corrected concatenation
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Speech Recognition API is not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognition && !isListening) {
      recognition.start();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  return (
    <section id="chatbot" className="chatbot-section">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="chatbot-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Interact with the AI Companion:</h2>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicInput" className="mb-3">
                  <Form.Label>Prompt</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write a content about..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="dark"  onClick={startListening} className="w-100 mb-3">
                  🎤 
                </Button>
                <Button variant="dark" type="submit" className="w-100">
                  Generate Content
                </Button>
              </Form>
              <div className="chatbot-response mt-3">
                {mutation.isPending && <p>Generating your content...</p>}
                {mutation.isError && <p className="chatbot-error">{mutation.error.message}</p>}
                {mutation.isSuccess && <p className="chatbot-success">{mutation.data}</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ChatBot;*/
/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import './ChatBot.css'; // Import CSS file for custom styles
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/diagnose", { prompt });
  return res.data;
};

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => setIsListening(true);
      recognitionInstance.onend = () => setIsListening(false);
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setPrompt((prevPrompt) => prevPrompt + ' ' + transcript); // Corrected concatenation
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Speech Recognition API is not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognition && !isListening) {
      recognition.start();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  return (
    <section id="chatbot" className="chatbot-section">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="chatbot-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Interact with the AI Companion:</h2>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicInput" className="mb-3 position-relative">
                  <Form.Label>Prompt</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="text"
                      placeholder="Write a content about..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      required
                    />
                    <Button
                      variant="dark"
                      onClick={startListening}
                      className="chatbot-mic-button"
                    >
                      🎤
                    </Button>
                  </div>
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  Generate Content
                </Button>
              </Form>
              <div className="chatbot-response mt-3">
                {mutation.isPending && <p>Generating your content...</p>}
                {mutation.isError && <p className="chatbot-error">{mutation.error.message}</p>}
                {mutation.isSuccess && <p className="chatbot-success">{mutation.data}</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ChatBot;*/
import { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import './ChatBot.css'; // Import CSS file for custom styles


const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/diagnose", { prompt });
  return res.data;
};

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => setIsListening(true);
      recognitionInstance.onend = () => setIsListening(false);
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setPrompt((prevPrompt) => `${prevPrompt} ${transcript}`);
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Speech Recognition API is not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognition && !isListening) {
      recognition.start();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-wrapper">
        <div className="chatbot-content">
          <p className="chatbot-title">Interact with the AI Companion:</p>
          <form className="chatbot-form" onSubmit={submitHandler}>
            <div className="chatbot-input-container">
              <input 
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write a content about..."
                className="chatbot-input"
              />
              <button type="button" onClick={startListening} className="chatbot-mic-button">
                🎤
              </button>
            </div>
            <button className="chatbot-button" type="submit">
              Generate Content
            </button>
          </form>
          <div className="chatbot-response">
            {mutation.isPending && <p>Generating your content...</p>}
            {mutation.isError && <p className="chatbot-error">{mutation.error.message}</p>}
            {mutation.isSuccess && <p className="chatbot-success">{mutation.data}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;


