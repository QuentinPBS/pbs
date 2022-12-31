<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('lead_id');
            $table->unsignedBigInteger('feature_id');
            $table->unsignedBigInteger('owner_id');
            $table->unsignedBigInteger('customer_id');
            $table->float('amount');
            $table->string('payment_intent_id', 255)->nullable();
            $table->string('transfer_id', 255)->nullable();
            $table->string('status', 255)->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
