import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalRectSeries,
  VerticalRectSeriesCanvas,
  XAxis,
  YAxis
} from 'react-vis';

import { Component } from 'react';
// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


export default class Example extends Component {
  state = {
    useCanvas: false
  };
  render() {
    const { useCanvas } = this.state;
    const RectSeries = useCanvas
      ? VerticalRectSeriesCanvas
      : VerticalRectSeries;

    return (
      <FlexibleWidthXYPlot xDomain={[0, 7]} height={300} stackBy="y">
        <VerticalGridLines style={{ strokeWidth: 0.5 }} />
        <HorizontalGridLines style={{ strokeWidth: 0.5 }} />
        <XAxis style={{ strokeWidth: 0.5 }} />
        <YAxis style={{ strokeWidth: 0.5 }} />
        <RectSeries
          color="#007bff"
          data={[
            { x0: 1, x: 2, y: 10 },
            { x0: 2, x: 4, y: 5 },
            { x0: 5, x: 6, y: 15 }
          ]}
        />
        <RectSeries
          color="#52c41a"
          data={[
            { x0: 1, x: 2, y: 12 },
            { x0: 2, x: 4, y: 2 },
            { x0: 5, x: 6, y: 15 }
          ]}
        />
      </FlexibleWidthXYPlot>
    );
  }
}
