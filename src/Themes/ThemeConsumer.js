import { useContext } from "react";
import  ThemeContext from "./ThemeContext";

export default function ThemeConsumer (){
    const {theme,toggleTheme}=useContext(ThemeContext);

    return(
       
        <div style={{backgroundColor:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
            <button onClick={toggleTheme}>change Theme</button>
            <hr/>
            {/*<h2>
Introduction to Artificial Intelligence (AI)
Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include reasoning, learning, problem-solving, perception, and language understanding. AI aims to mimic human cognitive functions and has seen significant advancements in recent years, transforming various industries and aspects of daily life.

Types of AI
AI can be broadly categorized into two types:

Narrow AI (Weak AI): Designed to perform a narrow task (e.g., facial recognition, internet searches, or driving a car). Narrow AI systems operate under a limited set of constraints and do not possess general intelligence.

General AI (Strong AI): A hypothetical system that exhibits human-like intelligence across a wide range of activities. General AI can understand, learn, and apply knowledge in different contexts, much like a human. However, this level of AI does not yet exist and remains a long-term goal for researchers.

Key Concepts in AI
Machine Learning (ML): A subset of AI that involves training algorithms to learn from data and improve over time without being explicitly programmed. Techniques include supervised learning, unsupervised learning, and reinforcement learning.

Deep Learning: A specialized form of machine learning that uses neural networks with many layers (deep neural networks) to analyze various factors of data. It's particularly effective in image and speech recognition.

Natural Language Processing (NLP): Enables machines to understand, interpret, and respond to human language. Applications include chatbots, language translation services, and sentiment analysis.

Computer Vision: The field of AI that enables computers to interpret and make decisions based on visual data, such as images and videos. It's widely used in facial recognition, autonomous vehicles, and medical image analysis.

Applications of AI
AI is being integrated into various sectors, enhancing efficiency, accuracy, and functionality. Key applications include:

Healthcare: AI aids in diagnosing diseases, personalizing treatment plans, and predicting patient outcomes. It also powers robotic surgeries and medical imaging analysis.

Finance: AI algorithms detect fraudulent activities, automate trading, and provide personalized banking services.

Transportation: Autonomous vehicles, traffic management systems, and logistics optimization rely on AI to improve safety and efficiency.

Customer Service: AI-driven chatbots and virtual assistants provide 24/7 customer support, handle inquiries, and streamline service processes.

Entertainment: AI is used in content recommendation systems, game development, and creating realistic special effects in movies.

Ethical Considerations
The rise of AI also brings ethical concerns, such as:

Bias and Fairness: AI systems can inherit biases present in training data, leading to unfair treatment of certain groups.
Privacy: The extensive use of personal data for AI can lead to privacy infringements.
Job Displacement: Automation powered by AI may replace certain jobs, leading to economic and social challenges.
Conclusion
AI is a transformative technology with the potential to revolutionize numerous aspects of life and industry. While it offers significant benefits and opportunities, it also poses ethical and societal challenges that must be addressed. Understanding and responsibly developing AI will be crucial for harnessing its full potential while mitigating its risks.</h2>*/}
        </div>
    );
}