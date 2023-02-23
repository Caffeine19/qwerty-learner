export type PronunciationSwitcherPropsType = {
  state: string
  changePronunciationState: (state: string) => void
}

const PronunciationSwitcher: React.FC<PronunciationSwitcherPropsType> = ({ state, changePronunciationState }) => {
  return (
     // space-x-3不会生效，tailwind貌似在编译的时候删除了
    <div className="flex items-center justify-center">
      <div>
        {/* 父容器已经设置过了背景颜色，这边应该不需要再设置一次了 */}
        <select
          className="dark:text-white dark:text-opacity-60 transition-colors duration-300 cursor-pointer focus:outline-none"
          value={state}
          onChange={(e) => {
            changePronunciationState(e.target.value)
            e.target.blur()
          }}
        >
          <option value="false">关闭</option>
          <option value="us">美音</option>
          <option value="uk">英音</option>
          <option value="jap">日语</option>
        </select>
      </div>
    </div>
  )
}

export default PronunciationSwitcher
