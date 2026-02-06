import { useInView } from '../hooks/useInView'

const trustPills = ['합격자 데이터 기반', '6개월 로드맵', '합격률 2.5배 상승'] as const

export default function PersonaSection() {
  const { ref, inView } = useInView(0.3)

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#5048e5]/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 lg:p-12 ${inView ? 'animate-scale-in' : 'animate-hidden'}`}>
          <div className="text-5xl text-[#5048e5]/20 font-serif leading-none mb-4">&ldquo;</div>
          <blockquote className="italic text-lg lg:text-xl text-gray-700 leading-relaxed">
            네카라쿠배 간 선배한테 물어보면 &lsquo;그냥 열심히 했어&rsquo;밖에 안 나와요.
            <br />
            구체적으로 뭘, 어떤 순서로, 얼마나 했는지가 궁금한 건데...
            <br />
            그 과정을 깃허브 레포 보듯이 열어볼 수 있으면 좋겠어요.
          </blockquote>
          <div className="text-sm text-gray-400 mt-4">— 이준호 · 컴퓨터공학 4학년</div>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mt-8 ${inView ? 'animate-fade-in-up animate-delay-200' : 'animate-hidden'}`}>
          {trustPills.map((pill) => (
            <div
              key={pill}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#5048e5]/10 text-[#5048e5]"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
