import React from 'react'

const About = () => {
    return (
        <div className="mt-32 max-w-screen-lg w-screen mx-auto" id='aboutV'>

            <div className="text-4xl font-bold text-center">
                About VirtualMentor
            </div>

            <div className="mt-20 flex-col mx-2">

                <div className="flex flex-col md:flex-row my-12">
                    <div className="md:w-1/2">
                        <div className="text-2xl font-semibold my-2">
                            24/7 Personal AI Mentor
                        </div>
                        <div className="text-base">Your always-on study sidekick, VirtualMentor AI, is here to help 'round the clock. Got a burning question at midnight or need a boost of knowledge at the crack of dawn? No problem! Our AI mentor never sleeps and is your go-to guide whenever you need a hand. It's like having a study buddy who's just as insomniacally curious as you are! 🌙📚</div>
                    </div>
                    <img src="/images/undraw_teacher_re_sico.svg" alt="teacher" className='h-52 md:w-1/2' />
                </div>

                <div className="flex flex-col md:flex-row my-20">
                    <img src="/images/undraw_questions_re_1fy7.svg" alt="quiz" className='h-44 md:w-1/2' />
                    <div className="md:w-1/2">
                        <div className="text-2xl font-semibold my-2">
                            Personalised Quizzes
                        </div>
                        <div className="text-base">
                            Bring some fun into your learning journey with interactive quizzes. Challenge yourself, compete with friends, and turn studying into an entertaining game. Get ready for an educational adventure like no other! 🧠🎯🎉</div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row my-20">
                    <div className="md:w-1/2">
                        <div className="text-2xl font-semibold my-2">
                            AI Generated Flashcards
                        </div>
                        <div className="text-base">
                            Instant flashcards, no effort needed. Our AI crafts customized flashcards based on your study material, giving your memory a powerful upgrade. It's like a 24/7 flashcard wizard, making learning a breeze! 🤖📚🧠</div>
                    </div>
                    <img src="/images/undraw_sync_files_re_ws4c.svg" alt="cards" className='h-44 md:w-1/2' />
                </div>

                <div className="flex flex-col md:flex-row my-20">
                    <img src="/images/undraw_personal_goals_re_iow7.svg"alt="goals" className='h-44 md:w-1/2' />
                    <div className="md:w-1/2">
                        <div className="text-2xl font-semibold my-2">
                            AI-Generated Goal Recommendations
                        </div>
                        <div className="text-base">
                            VirtualMentor's AI has your future in mind. It crafts personalized study goals and recommends a tailored learning path to help you achieve them. Think of it as your study GPS, guiding you towards success, one goal at a time. 🌟🗺️🚀</div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default About
