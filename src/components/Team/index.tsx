import SectionTitle from "../Common/SectionTitle";

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Análisis Científico"
            title="Modelo de Cadenas de Markov"
            paragraph="Análisis probabilístico del comportamiento de contaminantes en cuerpos de agua con la implementación de Ecoboya. Este modelo matemático demuestra científicamente la efectividad de nuestras boyas ecológicas en la retención y control de contaminantes."
            width="640px"
            center
          />
        </div>

        {/* Contexto del problema */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            El Problema de la Contaminación Acuática
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">
                Situación Actual
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Los contaminantes plásticos fluyen libremente hacia lagos y ríos</li>
                <li>• Falta de sistemas efectivos de retención de residuos</li>
                <li>• Degradación continua de ecosistemas acuáticos</li>
                <li>• Pérdida de biodiversidad y calidad del agua</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">
                Solución Ecoboya
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Sistema de boyas ecológicas fabricadas con PLA reciclado</li>
                <li>• Retención efectiva de contaminantes flotantes</li>
                <li>• Delimitación de zonas críticas y áreas restringidas</li>
                <li>• Tecnología 3D sostenible y biodegradable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Diagrama de la Cadena de Markov */}
          <div className="relative mb-8 w-full max-w-5xl">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Modelo de Transición de Estados
            </h3>
            <svg
              viewBox="0 0 900 500"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Estados */}
              <g>
                {/* Estado E1 - Contaminantes entran al lago */}
                <circle
                  cx="200"
                  cy="250"
                  r="70"
                  fill="#3B82F6"
                  stroke="#1E40AF"
                  strokeWidth="4"
                />
                <text
                  x="200"
                  y="245"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  E1
                </text>
                <text
                  x="200"
                  y="265"
                  textAnchor="middle"
                  className="text-sm fill-white"
                >
                  Lago
                </text>
              </g>

              <g>
                {/* Estado E2 - Contaminantes en ríos */}
                <circle
                  cx="450"
                  cy="250"
                  r="70"
                  fill="#10B981"
                  stroke="#047857"
                  strokeWidth="4"
                />
                <text
                  x="450"
                  y="245"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  E2
                </text>
                <text
                  x="450"
                  y="265"
                  textAnchor="middle"
                  className="text-sm fill-white"
                >
                  Ríos
                </text>
              </g>

              <g>
                {/* Estado E3 - Retenidos por boyas */}
                <circle
                  cx="700"
                  cy="250"
                  r="70"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="4"
                />
                <text
                  x="700"
                  y="245"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  E3
                </text>
                <text
                  x="700"
                  y="265"
                  textAnchor="middle"
                  className="text-sm fill-white"
                >
                  Boyas
                </text>
              </g>

              {/* Flechas de transición - Mejor organizadas */}
              <g>
                {/* E1 -> E1 (self-loop superior) */}
                <path
                  d="M 170 200 Q 150 150 170 180 Q 190 150 170 200"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="140" y="160" className="text-sm font-bold fill-white" stroke="#1E40AF" strokeWidth="0.5">
                  12.5%
                </text>

                {/* E1 -> E2 (directa) */}
                <line
                  x1="270"
                  y1="250"
                  x2="380"
                  y2="250"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                />
                <text x="325" y="235" className="text-sm font-bold fill-white" stroke="#1E40AF" strokeWidth="0.5">
                  7.5%
                </text>

                {/* E1 -> E3 (arco superior) */}
                <path
                  d="M 270 250 Q 450 100 630 250"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="450" y="80" className="text-sm font-bold fill-white" stroke="#1E40AF" strokeWidth="0.5">
                  80%
                </text>

                {/* E2 -> E1 (arco inferior) */}
                <path
                  d="M 380 250 Q 200 400 270 250"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="325" y="420" className="text-sm font-bold fill-white" stroke="#047857" strokeWidth="0.5">
                  10%
                </text>

                {/* E2 -> E2 (self-loop inferior) */}
                <path
                  d="M 450 320 Q 450 380 450 320 Q 450 260 450 320"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="480" y="400" className="text-sm font-bold fill-white" stroke="#047857" strokeWidth="0.5">
                  18%
                </text>

                {/* E2 -> E3 (directa) */}
                <line
                  x1="520"
                  y1="250"
                  x2="630"
                  y2="250"
                  stroke="#10B981"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                />
                <text x="575" y="235" className="text-sm font-bold fill-white" stroke="#047857" strokeWidth="0.5">
                  72%
                </text>

                {/* E3 -> E1 (arco inferior largo) */}
                <path
                  d="M 630 250 Q 200 450 270 250"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="450" y="480" className="text-sm font-bold fill-white" stroke="#D97706" strokeWidth="0.5">
                  5%
                </text>

                {/* E3 -> E2 (arco inferior) */}
                <path
                  d="M 630 250 Q 450 400 380 250"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="505" y="420" className="text-sm font-bold fill-white" stroke="#D97706" strokeWidth="0.5">
                  10%
                </text>

                {/* E3 -> E3 (self-loop inferior) */}
                <path
                  d="M 700 320 Q 700 380 700 320 Q 700 260 700 320"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="730" y="400" className="text-sm font-bold fill-white" stroke="#D97706" strokeWidth="0.5">
                  85%
                </text>
              </g>

              {/* Definición de flecha mejorada */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="12"
                  markerHeight="8"
                  refX="11"
                  refY="4"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 12 4, 0 8"
                    fill="#374151"
                  />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Descripción de estados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  E1: Lago
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Los contaminantes entran al lago. Estado inicial del sistema donde comienza el análisis.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                  E2: Ríos
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Los contaminantes permanecen en zonas cercanas y ríos antes de ser interceptados.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
                  E3: Boyas
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Los contaminantes son retenidos exitosamente por las boyas ecológicas Ecoboya.
              </p>
            </div>
          </div>

          {/* Resultados del análisis */}
          <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Resultados del Análisis Científico
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Probabilidades después de 3 años:
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Permanecen en el lago (E1):</span>
                    <span className="font-semibold text-blue-600">5.98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">En ríos (E2):</span>
                    <span className="font-semibold text-green-600">10.70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Retenidos por boyas (E3):</span>
                    <span className="font-semibold text-yellow-600">83.31%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Efectividad de Ecoboya:
                </h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">94.02%</div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Probabilidad de que los contaminantes NO lleguen al lago después de 3 años
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfica de evolución temporal */}
          <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-6xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Evolución de Probabilidades a lo Largo del Tiempo
            </h3>
            <div className="relative h-96 w-full">
              <svg
                viewBox="0 0 800 350"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ejes */}
                <g>
                  {/* Eje X */}
                  <line
                    x1="50"
                    y1="300"
                    x2="750"
                    y2="300"
                    stroke="#374151"
                    strokeWidth="2"
                  />
                  {/* Eje Y */}
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="300"
                    stroke="#374151"
                    strokeWidth="2"
                  />
                </g>

                {/* Etiquetas del eje X */}
                <g>
                  <text x="50" y="320" textAnchor="middle" className="text-sm fill-gray-600">0</text>
                  <text x="200" y="320" textAnchor="middle" className="text-sm fill-gray-600">1</text>
                  <text x="350" y="320" textAnchor="middle" className="text-sm fill-gray-600">2</text>
                  <text x="500" y="320" textAnchor="middle" className="text-sm fill-gray-600">3</text>
                  <text x="650" y="320" textAnchor="middle" className="text-sm fill-gray-600">4</text>
                  <text x="750" y="320" textAnchor="middle" className="text-sm fill-gray-600">5</text>
                </g>

                {/* Etiquetas del eje Y */}
                <g>
                  <text x="30" y="60" textAnchor="middle" className="text-sm fill-gray-600">100%</text>
                  <text x="30" y="120" textAnchor="middle" className="text-sm fill-gray-600">80%</text>
                  <text x="30" y="180" textAnchor="middle" className="text-sm fill-gray-600">60%</text>
                  <text x="30" y="240" textAnchor="middle" className="text-sm fill-gray-600">40%</text>
                  <text x="30" y="300" textAnchor="middle" className="text-sm fill-gray-600">20%</text>
                </g>

                {/* Líneas de probabilidades */}
                <g>
                  {/* E1 (Lago) - Línea azul */}
                  <polyline
                    points="50,60 200,120 350,140 500,150 650,150 750,150"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                  />
                  {/* E2 (Ríos) - Línea verde */}
                  <polyline
                    points="50,180 200,160 350,150 500,140 650,140 750,140"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                  />
                  {/* E3 (Boyas) - Línea amarilla */}
                  <polyline
                    points="50,240 200,200 350,180 500,180 650,180 750,180"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                  />
                </g>

                {/* Puntos de datos */}
                <g>
                  {/* E1 puntos */}
                  <circle cx="50" cy="60" r="4" fill="#3B82F6" />
                  <circle cx="200" cy="120" r="4" fill="#3B82F6" />
                  <circle cx="350" cy="140" r="4" fill="#3B82F6" />
                  <circle cx="500" cy="150" r="4" fill="#3B82F6" />
                  <circle cx="650" cy="150" r="4" fill="#3B82F6" />
                  <circle cx="750" cy="150" r="4" fill="#3B82F6" />

                  {/* E2 puntos */}
                  <circle cx="50" cy="180" r="4" fill="#10B981" />
                  <circle cx="200" cy="160" r="4" fill="#10B981" />
                  <circle cx="350" cy="150" r="4" fill="#10B981" />
                  <circle cx="500" cy="140" r="4" fill="#10B981" />
                  <circle cx="650" cy="140" r="4" fill="#10B981" />
                  <circle cx="750" cy="140" r="4" fill="#10B981" />

                  {/* E3 puntos */}
                  <circle cx="50" cy="240" r="4" fill="#F59E0B" />
                  <circle cx="200" cy="200" r="4" fill="#F59E0B" />
                  <circle cx="350" cy="180" r="4" fill="#F59E0B" />
                  <circle cx="500" cy="180" r="4" fill="#F59E0B" />
                  <circle cx="650" cy="180" r="4" fill="#F59E0B" />
                  <circle cx="750" cy="180" r="4" fill="#F59E0B" />
                </g>

                {/* Título de los ejes */}
                <text x="400" y="40" textAnchor="middle" className="text-lg font-semibold fill-gray-800 dark:fill-white">
                  Evolución Temporal de Estados
                </text>
                <text x="20" y="180" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90, 20, 180)">
                  Probabilidad (%)
                </text>
                <text x="400" y="350" textAnchor="middle" className="text-sm fill-gray-600">
                  Años
                </text>
              </svg>
            </div>

            {/* Leyenda */}
            <div className="flex justify-center mt-6 space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">E1 - Lago</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">E2 - Ríos</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">E3 - Boyas</span>
              </div>
            </div>

            {/* Datos de la tabla */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 dark:text-gray-300">Año</th>
                    <th className="text-center py-2 px-4 font-semibold text-blue-600">E1 - Lago</th>
                    <th className="text-center py-2 px-4 font-semibold text-green-600">E2 - Ríos</th>
                    <th className="text-center py-2 px-4 font-semibold text-yellow-600">E3 - Boyas</th>
                    <th className="text-center py-2 px-4 font-semibold text-gray-600">Efectividad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 px-4 font-medium">0</td>
                    <td className="py-2 px-4 text-center">100%</td>
                    <td className="py-2 px-4 text-center">0%</td>
                    <td className="py-2 px-4 text-center">0%</td>
                    <td className="py-2 px-4 text-center">0%</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 px-4 font-medium">1</td>
                    <td className="py-2 px-4 text-center">6.31%</td>
                    <td className="py-2 px-4 text-center">10.29%</td>
                    <td className="py-2 px-4 text-center">83.40%</td>
                    <td className="py-2 px-4 text-center">93.69%</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 px-4 font-medium">2</td>
                    <td className="py-2 px-4 text-center">5.99%</td>
                    <td className="py-2 px-4 text-center">10.67%</td>
                    <td className="py-2 px-4 text-center">83.35%</td>
                    <td className="py-2 px-4 text-center">94.01%</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 px-4 font-medium">3</td>
                    <td className="py-2 px-4 text-center">5.98%</td>
                    <td className="py-2 px-4 text-center">10.70%</td>
                    <td className="py-2 px-4 text-center">83.31%</td>
                    <td className="py-2 px-4 text-center">94.02%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusión científica */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Conclusión Científica
            </h3>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                El modelo de Cadenas de Markov demuestra que <strong className="text-green-600">Ecoboya alcanza una efectividad del 94.02%</strong> en la retención de contaminantes después de solo 3 años de implementación.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Esta evidencia científica respalda la viabilidad y eficacia de nuestra solución ecológica para la protección de ecosistemas acuáticos, proporcionando una alternativa sostenible y científicamente validada a los métodos tradicionales de control de contaminación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;