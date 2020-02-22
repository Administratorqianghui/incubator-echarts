/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// Do not contain scrollable legend, for sake of file size.

import * as echarts from '../echarts';

import './legend/LegendModel';
import './legend/legendAction';
import './legend/LegendView';

import legendFilter from './legend/legendFilter';
import Component, { ComponentModelConstructor } from '../model/Component';

// Series Filter
echarts.registerProcessor(echarts.PRIORITY.PROCESSOR.SERIES_FILTER, legendFilter);

(Component as ComponentModelConstructor).registerSubTypeDefaulter('legend', function () {
    // Default 'plain' when no type specified.
    return 'plain';
});