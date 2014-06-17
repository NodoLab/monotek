var priceCalculator = (function ($) {

	var self = {};

	// Работы
	// - Тип дома
	// - Тип Ремонта
	self.work = {};
	self.work['11'] = 8000;     self.work['21'] = 7500;    self.work['31'] = 7000;
	self.work['12'] = 9000;     self.work['22'] = 8500;    self.work['32'] = 8500;
	self.work['13'] = 10000;    self.work['23'] = 9500;    self.work['33'] = 10000;

	// Отделочные материалы
	self.decor = 4500;

	self.init = function() {

		// Check if price calculator is there
		var $pc = $('.js-price-calculator').eq(0);
		if ($pc.length < 1) {
			return;
		}

		$pc.find('.js-calculate').click(calculateClick);

		$(".calc__typeitem").click(function() {
			$(this).addClass('is-active').siblings().removeClass('is-active');
		});

	}

	function showMessage(msg) { // Private function
		alert(msg)
	}

	function number_format (number, decimals, dec_point, thousands_sep) {
		number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
		var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
			toFixedFix = function (n, prec) {
				var k = Math.pow(10, prec);
				return '' + Math.round(n * k) / k;
			};
		// Fix for IE parseFloat(0.55).toFixed(0) = 0;
		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}

	function calculateClick(e) { // Private function
		e.preventDefault();

		var error = false;
		var $pc = $('.js-price-calculator').eq(0);
		var $form = $pc.find('.calc');
		var $result = $pc.find('.js-calculator-result');

		// Check if the price calculator is there
		if ($pc.length < 1) {
			return;
		}

		// Get the area
		var area = $form.find('input[name="area"]').val();
		area = String(area).replace(',','.');
		area = parseFloat(area);
		console.log('Area:' + area);
		if ( !area || area === NaN ) {
			showMessage('Пожалуйста, укажите площадь помещения');
			return;
		}

		// Get work price
		var workPriceIndex = '';
		var fields = [ 'housetype','renewtype' ];
		var messages = [ 'Пожалуйста, выберите тип дома', 'Пожалуйста, выберите типа ремонта'];
		var errors = [];
		$(fields).each(function (index, field) {
			var value = $form.find('.calc__row-' + field + ' .is-active').attr('data-value');
			console.log(field + ':' + value);
			if (!value) {
				error = true;
				errors.push(messages[index])
				return;
			}
			workPriceIndex = String(workPriceIndex) + String(value);
		});

		if ( error ) {
			showMessage(errors.join("\n"));
			return;
		}

		var workPrice = self.work[workPriceIndex];
		var workTotal = workPrice * area;

		// Get decor price
		var decorPrice = self.decor;
		var decorTotal = decorPrice * area;

		// Total
		var total = workTotal + decorTotal;

		// Set the values
		var areaOutput = number_format(area, 2, ',', ' ') + ' м<sup>2</sup>';
		var housetype = $pc.find('.calc__row-housetype .is-active .calc__typedescr').html();
		var renewtype = $pc.find('.calc__row-renewtype .is-active .calc__typedescr .calc__title').html();
		var currency = ' руб.';
		var workTotalOutput = number_format(workTotal, 0, ',', ' ') + currency;
		var decorTotalOutput = number_format(decorTotal, 0, ',', ' ') + currency;
		var totalOutput = number_format(total, 0, ',', ' ') + currency;

		$result.find('tbody tr:nth-child(1) td:last-child').html(areaOutput);
		$result.find('tbody tr:nth-child(2) td:last-child').html(housetype);
		$result.find('tbody tr:nth-child(3) td:last-child').html(renewtype);
		$result.find('tbody tr:nth-child(4) td:last-child').html(workTotalOutput);
		$result.find('tbody tr:nth-child(5) td:last-child').html(decorTotalOutput);
		$result.find('tbody tr:nth-child(6) td:last-child').html(totalOutput);

		// Show the result
		if ( !$result.is(':visible') ) {
			$result.effect('slide', { direction: 'up', easing:'easeInOutQuart' }, 2000 );
		}

	}

	return self;

})(jQuery);