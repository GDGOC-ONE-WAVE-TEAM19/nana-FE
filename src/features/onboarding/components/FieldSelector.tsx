import { useOnboarding, FIELDS } from '../hooks/useOnboarding'
import type { FieldId } from '../types'

export default function FieldSelector() {
  const { selectedField, setSelectedField } = useOnboarding()

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {FIELDS.map((field) => {
        const isSelected = selectedField === field.id
        return (
          <button
            key={field.id}
            onClick={() => setSelectedField(field.id as FieldId)}
            className={`group relative flex flex-col justify-between h-[130px] lg:h-[200px] p-4 lg:p-5 rounded-[16px] lg:rounded-[20px] text-left transition-all duration-200 focus:outline-none ${
              isSelected
                ? 'bg-[#F3F4FE] border-2 border-[#5A51F0]'
                : 'bg-[#F9FAFC] border-2 border-transparent hover:bg-gray-100 hover:border-gray-200'
            }`}
          >
            <span className="text-2xl lg:text-4xl">{field.emoji}</span>
            <div>
              <h3 className="text-sm lg:text-xl font-bold text-gray-900">{field.label}</h3>
              <p className={`text-xs lg:text-sm font-medium ${isSelected ? 'text-[#5A51F0]' : 'text-gray-500'}`}>
                {field.labelEn}
              </p>
            </div>
          </button>
        )
      })}
    </section>
  )
}
