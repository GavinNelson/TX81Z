WebMidi.enable(function (err) {
  if (err) {
    console.warn(err);
  } else {
    console.log("Sysex is enabled!");
  }
}, true);

const vced = 0b0010010;
const aced = 0b0010011;
const pced = 0b0010011;

function send (channel, edgroup, parameter, data) {
  var ch = channel + 0b00010000;
  WebMidi.outputs[0].sendSysex(0x43, [ch,edgroup,parameter,data]);
}

var params = [
  ['op1_enable',          {'group': vced, 'param': 93}],
  ['op1_wave',            {'group': aced, 'param': 3}],
  ['op1_fix-freq-enable', {'group': aced, 'param': 0}],
  ['op1_freq',            {'group': vced, 'param': 11}],
  ['op1_detune',          {'group': vced, 'param': 12}],
  ['op1_fix-freq-range',  {'group': vced, 'param': 1}],
  ['op1_fix-freq-fine',   {'group': vced, 'param': 2}],
  ['op1_attack',          {'group': vced, 'param': 0}],
  ['op1_decay-1-rate',    {'group': vced, 'param': 1}],
  ['op1_decay-1-level',   {'group': vced, 'param': 4}],
  ['op1_decay-2-rate',    {'group': vced, 'param': 2}],
  ['op1_release-rate',    {'group': vced, 'param': 3}],
  ['op1_level-scaling',   {'group': vced, 'param': 5}],
  ['op1_rate-scaling',    {'group': vced, 'param': 6}],
  ['op1_eg-bias-sens',    {'group': vced, 'param': 7}],
  ['op1_eg-shift',        {'group': aced, 'param': 4}],
  ['op1_amp-mod-enable',  {'group': vced, 'param': 8}],
  ['op1_key-vel-sens',    {'group': vced, 'param': 9}],
  ['op1_out-level',       {'group': vced, 'param': 10}],
  ['op2_enable',          {'group': vced, 'param': 93}],
  ['op2_wave',            {'group': aced, 'param': 8}],
  ['op2_fix-freq-enable', {'group': aced, 'param': 5}],
  ['op2_freq',            {'group': vced, 'param': 0}],
  ['op2_detune',          {'group': vced, 'param': 0}],
  ['op2_fix-freq-range',  {'group': aced, 'param': 6}],
  ['op2_fix-freq-fine',   {'group': aced, 'param': 7}],
  ['op2_attack',          {'group': vced, 'param': 13}],
  ['op2_decay-1-rate',    {'group': vced, 'param': 14}],
  ['op2_decay-1-level',   {'group': vced, 'param': 17}],
  ['op2_decay-2-rate',    {'group': vced, 'param': 15}],
  ['op2_release-rate',    {'group': vced, 'param': 16}],
  ['op2_level-scaling',   {'group': vced, 'param': 18}],
  ['op2_rate-scaling',    {'group': vced, 'param': 19}],
  ['op2_eg-bias-sens',    {'group': vced, 'param': 20}],
  ['op2_eg-shift',        {'group': aced, 'param': 9}],
  ['op2_amp-mod-enable',  {'group': vced, 'param': 21}],
  ['op2_key-vel-sens',    {'group': vced, 'param': 22}],
  ['op2_out-level',       {'group': vced, 'param': 23}],
  ['op3_enable',          {'group': vced, 'param': 93}],
  ['op3_wave',            {'group': aced, 'param': 13}],
  ['op3_fix-freq-enable', {'group': aced, 'param': 10}],
  ['op3_freq',            {'group': vced, 'param': 0}],
  ['op3_detune',          {'group': vced, 'param': 0}],
  ['op3_fix-freq-range',  {'group': aced, 'param': 11}],
  ['op3_fix-freq-fine',   {'group': aced, 'param': 12}],
  ['op3_attack',          {'group': vced, 'param': 0}],
  ['op3_decay-1-rate',    {'group': vced, 'param': 0}],
  ['op3_decay-1-level',   {'group': vced, 'param': 0}],
  ['op1_decay-2-rate',    {'group': vced, 'param': 0}],
  ['op3_release-rate',    {'group': vced, 'param': 0}],
  ['op3_level-scaling',   {'group': vced, 'param': 0}],
  ['op3_rate-scaling',    {'group': vced, 'param': 0}],
  ['op3_eg-bias-sens',    {'group': vced, 'param': 0}],
  ['op3_eg-shift',        {'group': aced, 'param': 14}],
  ['op3_amp-mod-enable',  {'group': vced, 'param': 0}],
  ['op3_key-vel-sens',    {'group': vced, 'param': 0}],
  ['op3_out-level',       {'group': vced, 'param': 0}],
  ['op4_enable',          {'group': vced, 'param': 93}],
  ['op4_wave',            {'group': aced, 'param': 18}],
  ['op4_fix-freq-enable', {'group': aced, 'param': 15}],
  ['op4_freq',            {'group': vced, 'param': 0}],
  ['op4_detune',          {'group': vced, 'param': 0}],
  ['op4_fix-freq-range',  {'group': aced, 'param': 16}],
  ['op4_fix-freq-fine',   {'group': aced, 'param': 17}],
  ['op4_attack',          {'group': vced, 'param': 0}],
  ['op4_decay-1-rate',    {'group': vced, 'param': 0}],
  ['op4_decay-1-level',   {'group': vced, 'param': 0}],
  ['op4_decay-2-rate',    {'group': vced, 'param': 0}],
  ['op4_release-rate',    {'group': vced, 'param': 0}],
  ['op4_level-scaling',   {'group': vced, 'param': 0}],
  ['op4_rate-scaling',    {'group': vced, 'param': 0}],
  ['op4_eg-bias-sens',    {'group': vced, 'param': 0}],
  ['op4_eg-shift',        {'group': aced, 'param': 19}],
  ['op4_amp-mod-enable',  {'group': vced, 'param': 0}],
  ['op4_key-vel-sens',    {'group': vced, 'param': 0}],
  ['op4_out-level',       {'group': vced, 'param': 0}],
  ['alg',                 {'group': vced, 'param': 0}],
  ['feedback',            {'group': vced, 'param': 0}],
  ['lfowave',             {'group': vced, 'param': 0}],
  ['lfo_speed',           {'group': vced, 'param': 0}],
  ['lfo_delay',           {'group': vced, 'param': 0}],
  ['lfo_sync',            {'group': vced, 'param': 0}],
  ['lfo_pmd',             {'group': vced, 'param': 0}],
  ['lfo_bc-pitch',        {'group': vced, 'param': 0}],
  ['lfo_mw-pitch',        {'group': vced, 'param': 0}],
  ['lfo_fc-pitch',        {'group': vced, 'param': 0}],
  ['lfo_pms',             {'group': vced, 'param': 0}],
  ['lfo_amd',             {'group': vced, 'param': 0}],
  ['lfo_bc-amp',          {'group': vced, 'param': 0}],
  ['lfo_mw-amp',          {'group': vced, 'param': 0}],
  ['lfo_fc-amp',          {'group': vced, 'param': 0}],
  ['lfo_ams',             {'group': vced, 'param': 0}],
  ['transpose',           {'group': vced, 'param': 0}],
  ['bend-range',          {'group': vced, 'param': 0}],
  ['poly',                {'group': vced, 'param': 0}],
  ['porta_enable',        {'group': vced, 'param': 0}],
  ['porta_mode',          {'group': vced, 'param': 0}],
  ['porta_time',          {'group': vced, 'param': 0}],
  ['sustain',             {'group': vced, 'param': 0}],
  ['chorus',              {'group': vced, 'param': 0}],
  ['reverb',              {'group': vced, 'param': 20}]
];

var pmap = new Map(params)

var controls = document.querySelectorAll('input');

controls.forEach(function(c) {
  c.addEventListener('input', function(e){
    //console.log(e.currentTarget.name + ": " + e.currentTarget.value);
  });
});

WebMidi.outputs[0].sendSysex(0x43, []);
