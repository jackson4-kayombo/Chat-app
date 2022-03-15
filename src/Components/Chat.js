import avatar from '../images/avatar.jpg';
import image1 from '../images/dog-image-1.jpg';
import image2 from '../images/dog-image-2.jpg';
import image3 from '../images/dog-image-3.jpg';
import svg from '../SVG/circle-right.svg';
import './Chat.css';
const Chat = () => {
    return (
        <div className='main'>
            <div className='purple'>
                <div className='gray'>
                    <section>
                        <div className='conteiner'>
                            <div className='phone'>
                                <div className='camera'>
                                <span className='space'>&nbsp;</span>
                                    <img className='avatar' src={avatar} alt='samuel' />
                                    <h5>Samuel Green</h5>
                                    <p className='available'>Available to Walks </p>
                                </div>
                                <div className='top-text'>
                                    <p className='top-chat'>That sounds great. I’d be happy with that.</p>
                                    <p className='top-chat'>Could you send over some pictures of your dog, please?</p>
                                </div>
                                <div className='img-text'>
                                    <div className='dog-images'>
                                        <img className='dog' src={image1} alt='dog-1' />
                                        <img className='dog'  src={image2} alt='dog-2' />
                                        <img className='dog' src={image3} alt='dog-3' />
                                    </div>
                                    <span className='here'><p className='few'>Here are a few pictures. She’s a happy girl!</p></span>
                                    <span className='make'><p>Can you make its?</p></span>
                                </div>
                                <div className='text-bottom'>
                                    <span className='look'><p>She looks so happy! The time we discussed works. How long shall I take her out for?</p></span>
                                    <span className='top'>
                                        <p className='hour'>30 minute walk</p>
                                        <p className='dollar'>$29</p>
                                    </span>
                                    <div className='bottom'>
                                        <p className='hour'>1 hour walk</p>
                                        <p className='dollar'>$49</p>
                                    </div>
                                </div>
                                <div className='text-area'>
                                    <p>Type a message…</p>
                                    <img src={svg} alt='circle' />
                                </div>
                            </div>
                            <div className='message'>
                                <h1>Simple bookings.</h1>
                                <p className='final'> Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chats.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default Chat;