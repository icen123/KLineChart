/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { checkPointOnStraightLine } from './graphicHelper'

export default {
  name: 'horizontalStraightLine',
  totalStep: 2,
  checkMousePointOn: (key, type, points, mousePoint) => {
    return checkPointOnStraightLine(points[0], points[1], mousePoint)
  },
  createGraphicDataSource: (step, tpPoints, xyPoints, viewport) => {
    return [
      {
        type: 'line',
        isDraw: true,
        isCheck: true,
        dataSource: [[
          {
            x: 0,
            y: xyPoints[0].y
          }, {
            x: viewport.width,
            y: xyPoints[0].y
          }
        ]]
      }
    ]
  }
}
